'use babel';
/* @flow */

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

import type {NuclideUri} from '../../commons-node/nuclideUri';

// Version of atom$Point
export type AtomPoint = {
  row: number,
  column: number,
};

// Version of atom$Range
export type AtomRange = {
  start: AtomPoint,
  end: AtomPoint,
};

export type FileVersion = {
  filePath: NuclideUri,
  version: number,
};
