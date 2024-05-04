import { Input } from "@/components/ui/input";
import { useDispatch } from "react-redux";
import { searchText, userSearchInput } from "@/features/searchSlice";

function Search() {
  const dispatch = useDispatch();


  async function searchMovieFtn(text) {
    dispatch(searchText(text));
  }

  return (
    <div className="flex w-full max-w-sm items-center space-x-2 pl-3 pt-3">
      <Input
        type="type"
        placeholder="Search Movies"
        onKeyDown={(e) => {
          if (e.key === "Enter") searchMovieFtn(e.target.value);
        }}
        onChange={(e) => dispatch(userSearchInput(e.target.value))}
      />
    </div>
  );
}

export default Search;
