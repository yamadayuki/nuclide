'use babel';
/* @flow */

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

import {parseMessages} from '../lib/packager/parseMessages';
import fsPromise from '../../commons-node/fsPromise';
import nuclideUri from '../../commons-node/nuclideUri';
import {Observable} from 'rxjs';

describe('parseMessages', () => {

  // Run the same tests for each format of the packager output. We do this not because we want to
  // stay DRY, but to ensure that we're testing for the same output for each format.
  ['packager-stdout-1', 'packager-stdout-2'].forEach(fixtureName => {

    describe(fixtureName, () => {

      const lines = getLines(fixtureName).cache();

      it('parses the preamble (skipping the ceremony)', () => {
        waitsForPromise(async () => {
          const output = await parseMessages(lines).toArray().toPromise();
          expect((output[0]: any).message.text).toBe('Running packager on port 8081.');
        });
      });

      it('finds the ready line', () => {
        waitsForPromise(async () => {
          const output = await parseMessages(lines).toArray().toPromise();
          expect((output[6]: any).kind).toBe(
            'ready',
            `Expected ready message but found ${JSON.stringify(output[6])}`,
          );
        });
      });

    });

  });

});

function getLines(name: string): Observable<string> {
  const pathToFile = nuclideUri.resolve(__dirname, 'fixtures', `${name}.txt`);
  return Observable.defer(() => Observable.fromPromise(fsPromise.readFile(pathToFile)))
    .switchMap(contents => Observable.from(contents.toString().split('\n')));
}
