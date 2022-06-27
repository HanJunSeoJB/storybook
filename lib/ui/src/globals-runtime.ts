import * as REACT from 'react';
import * as REACTDOM from 'react-dom';

import * as STORYBOOKCOMPONENTS from '@storybook/components';
import * as STORYBOOKCHANNELS from '@storybook/channels';
import * as STORYBOOKEVENTS from '@storybook/core-events';
import * as STORYBOOKROUTER from '@storybook/router';
import * as STORYBOOKTHEMING from '@storybook/theming';
import * as STORYBOOKAPI from '@storybook/api';
import * as STORYBOOKADDONS from '@storybook/addons';
import * as STORYBOOKCLIENTLOGGER from '@storybook/client-logger';
import { Keys, definitions } from './globals-definitions';

export const values: Required<Record<Keys, any>> = {
  react: REACT,
  'react-dom': REACTDOM,
  '@storybook/components': STORYBOOKCOMPONENTS,
  '@storybook/channels': STORYBOOKCHANNELS,
  '@storybook/core-events': STORYBOOKEVENTS,
  '@storybook/router': STORYBOOKROUTER,
  '@storybook/theming': STORYBOOKTHEMING,
  '@storybook/api': STORYBOOKAPI,
  '@storybook/addons': STORYBOOKADDONS,
  '@storybook/client-logger': STORYBOOKCLIENTLOGGER,
};

export { definitions };
