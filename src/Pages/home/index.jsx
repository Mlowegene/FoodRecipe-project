import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeList from "../../components/recipe-item";

export default function Home() {
  const { loading, recipeList } = useContext(GlobalContext);

  if (loading) return <h2>loading...please wait!!</h2>;

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeList item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing to show.. please search your recipe
          </p>
        </div>
      )}
    </div>
  );
}
