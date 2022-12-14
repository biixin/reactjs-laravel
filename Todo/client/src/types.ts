
export type accounts = {
    id: number,
    email: string,
    name: string
}

// laravel
// export type Tasks = {
//     id: number,
//     title: string,
//     is_done: boolean,
//     description: string
//     due_date: string
//     user_id: number
//     category_id: number
//     categoryTitle: string
//     categoryColor: string
// }

export type Tasks = {
    id: number,
    title: string,
    isDone: boolean,
    description: string
    dueDate: string
    userId: number
    categoryId: number
    Category: {
        title: string,
        color: string
    }
}

export type Task = {
    id: number,
    title: string,
    isDone: boolean,
    description: string
    dueDate: string
    userId: number
    categoryId: number
    Category: {
        id: number,
        title: string,
        color: string,
    }
}





export type Category = {
    id: number,
    title: string,
    color: string,
    user_id: number,
}

export type Error = {
    email?: [string]
    name?: [string]
    password?: [string],
    title?: [string],
    due_date?: [string],
    categoryId?: [string],
    description?: [string],
    error?: [string],
    color?: [string]

}


