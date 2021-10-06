import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf, setAddon } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import JSXAddon from 'storybook-addon-jsx';
import { action } from '@storybook/addon-actions';
import { Component as CopyField } from '../CopyField';

const onCopy = () => action('onCopy')();
onCopy.toString = () => 'onCopy';

setAddon(JSXAddon);

storiesOf('MaximeRainville/CopyField', module)
  .addDecorator(story => <div style={{ width: '100%' }}>{story()}</div>)
  .addDecorator(withKnobs)
  .addWithJSX('CopyField', () => (
    <CopyField
      value={text('value', '18d3a72a42c8ff3e4a0d64e6a85a271d')}
      offuscate={boolean('offuscate')}
      onCopy={onCopy}
    />
  ));
