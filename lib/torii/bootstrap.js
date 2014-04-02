import Torii from 'torii';
import LinkedInOauth2Endpoint from 'torii/endpoints/linked-in-oauth2';
import DummySuccessEndpoint from 'torii/endpoints/dummy-success';
import DummyFailureEndpoint from 'torii/endpoints/dummy-failure';
import ApplicationAdapter from 'torii/adapters/application';

import PopupService from 'torii/services/popup';

export default function(container){
  container.register('torii:main', Torii);
  container.register('torii-endpoint:linked-in-oauth2', LinkedInOauth2Endpoint);
  container.register('torii-endpoint:dummy-success', DummySuccessEndpoint);
  container.register('torii-endpoint:dummy-failure', DummyFailureEndpoint);
  container.register('torii-adapter:application', ApplicationAdapter);

  container.register('torii-service:popup', PopupService);

  container.injection('torii-endpoint', 'popup', 'torii-service:popup');

  return container;
};