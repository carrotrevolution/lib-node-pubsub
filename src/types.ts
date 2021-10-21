import {Attributes} from '@google-cloud/pubsub';

export type PubSubDataType = 'gift-code';

export type PubSubEventType = 'created' | 'updated' | 'removed';

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
