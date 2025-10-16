export default function MealDetails({params}){
    return(
        <main>
            <h1>Meal Details</h1>
            <h2>{params.mealSlug}</h2>
        </main>
    )
}