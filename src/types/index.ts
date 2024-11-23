interface Subject {
  identifier: string;
  name: string;
}

interface Unit {
  identifier: string;
  name: string;
  subjectId: string;
  tags?: string[];
}

type DifficultyLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

interface Alternative {
  index: number;
  text: string;
  isCorrect: boolean;
}

interface Exercise {
  identifier: number;
  statement: string;
  alternatives: Alternative[];
  subjectId?: string;
  unitId?: string;
  difficulty?: DifficultyLevel;
  tags?: string[];
  imageUrl?: string;
}

export type {
  Subject,
  Unit,
  DifficultyLevel,
  Exercise,
  Alternative,
};  