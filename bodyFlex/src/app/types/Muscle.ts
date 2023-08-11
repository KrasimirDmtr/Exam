export interface Exercises {
    exerciseName: string,
    imageUrl: string,
    tutorial: string,
}


export interface Description {
    muscleInfo: string,
    exercises: Exercises
}

export interface Muscle {
    muscle: string,
    imageUrl: string,
    key: string,
    description: Description
}