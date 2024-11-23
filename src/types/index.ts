import type { Profile } from './profile';
import type { Unit, Subject } from './subject';
interface Alternative {
  index: number;
  text: string;
  isCorrect: boolean;
}

interface Exercise {
  identifier: string;
  statement: string;
  alternatives: Alternative[];
  subjectId?: string;
  unitId?: string;
  difficulty?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  explanation?: string;
  tags?: string[];
  imageUrl?: string;
}


export type {
  Subject,
  Unit,
  Exercise,
  Alternative,
  Profile
};  