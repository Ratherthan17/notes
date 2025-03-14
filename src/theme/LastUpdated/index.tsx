/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Translate from '@docusaurus/Translate';
import {ThemeClassNames} from '@docusaurus/theme-common';
import type {Props} from '@theme/LastUpdated';

function LastUpdatedAtDate({
  lastUpdatedAt,
  formattedLastUpdatedAt,
}: {
  lastUpdatedAt: number;
  formattedLastUpdatedAt: string;
}): JSX.Element {

  const date = new Date(lastUpdatedAt * 1000).toLocaleString();

  return (
    <Translate
      id="theme.lastUpdated.atDate"
      description="The words used to describe on which date a page has been last updated"
      values={{
        date: (
          //<b>
            <time dateTime={new Date(lastUpdatedAt * 1000).toLocaleString()}>
              {date}
            </time>
          //</b>
        ),
      }}>
      {'{date}'}
    </Translate>
  );
}

function LastUpdatedByUser({
  lastUpdatedBy,
}: {
  lastUpdatedBy: string;
}): JSX.Element {
  return (
    <Translate
      id="theme.lastUpdated.byUser"
      description="The words used to describe by who the page has been last updated"
      values={{
        user: <b>{lastUpdatedBy}</b>,
      }}>
      {' by {user}'}
    </Translate>
  );
}

export default function LastUpdated({
  lastUpdatedAt,
  formattedLastUpdatedAt,
  lastUpdatedBy,
}: Props): JSX.Element {
  return (
    <span style={{fontStyle: 'normal',fontSize: '0.95rem'}}>
    {/* <span className={ThemeClassNames.common.lastUpdated}> */}
      <Translate
        id="theme.lastUpdated.lastUpdatedAtBy"
        description="The sentence used to display when a page has been last updated, and by who"
        values={{
          atDate:
            lastUpdatedAt && formattedLastUpdatedAt ? (
              <LastUpdatedAtDate
                lastUpdatedAt={lastUpdatedAt}
                formattedLastUpdatedAt={formattedLastUpdatedAt}
              />
            ) : (
              ''
            ),
          byUser: lastUpdatedBy ? (
            <LastUpdatedByUser lastUpdatedBy={lastUpdatedBy} />
          ) : (
            ''
          ),
        }}>
        {'最后更新于：{atDate}{byUser}'}
      </Translate>
      {process.env.NODE_ENV === 'development' && (
        <div>
          {/* eslint-disable-next-line @docusaurus/no-untranslated-text */}
          {/* <small> (Simulated during dev for better perf)</small> */}
        </div>
      )}
    </span>
  );
}
