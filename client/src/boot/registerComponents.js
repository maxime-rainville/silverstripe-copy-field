/* eslint-disable import/no-extraneous-dependencies */
import Injector from 'lib/Injector';
import CopyField from 'components/CopyField';

export default () => {
  Injector.component.registerMany({
    CopyField
  });
};
