import {Attributes, PubSub, Topic} from '@google-cloud/pubsub';

interface PubSubHelperConfig {
  projectId: string;
  topicName: string;
}

export class PubSubHelper {
  private topic: Topic;

  constructor(config: PubSubHelperConfig) {
    const pubsub = new PubSub({projectId: config.projectId});
    this.topic = pubsub.topic(config.topicName);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async publish(dataJSON: any, attributes?: Attributes) {
    const dataString = JSON.stringify(dataJSON);
    const buffer = Buffer.from(dataString);
    await this.topic.publish(buffer, attributes);
  }
}
