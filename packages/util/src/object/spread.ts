// Copyright 2017-2022 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name objectSpread
 * @summary Concats all sources into the destination
 */
export function objectSpread <T extends object> (dest: object, ...sources: (object | undefined | null)[]): T {
  for (let i = 0; i < sources.length; i++) {
    const src = sources[i];

    if (src) {
      Object.assign(dest, src);
    }
  }

  return dest as T;
}
