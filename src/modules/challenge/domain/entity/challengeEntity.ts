type ChallengeProps = {
  id: string;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  isPublished: boolean;
  isCompleted: boolean;
  isArchived: boolean;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export default class ChallengeEntity {
  _props: ChallengeProps;

  constructor(props: ChallengeProps) {
    this._props = props;
  }
}
