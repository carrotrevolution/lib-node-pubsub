import {Attributes} from '@google-cloud/pubsub';

type PubSubDataType = 'gift-code';

type PubSubEventType = 'created' | 'updated' | 'removed';

export interface PublishAttributes extends Attributes {
  dataType: PubSubDataType;
  eventType: PubSubEventType;
  actionType: string;
  env: string;
}

export interface PubSubHelperConfig {
  projectId: string;
  topicName: string;
}
