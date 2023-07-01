import { useDispatch, useSelector } from "react-redux";
import { selectUsersFilter } from "../../redux/tweetsSelectors";
import { actions } from "../../redux/tweetsSlice";
import "./filter.css";
const FilteredUsers = () => {
  const filter = useSelector(selectUsersFilter);
  const dispatch = useDispatch();
  return (
    <div className="select-wrap">
      <select
        className="select"
        id="standard-select"
        name="priority"
        onChange={(e) => dispatch(actions.changeFilter(e.target.value))}
        value={filter}
      >
        <option value="all">All</option>
        <option value="follow">Follow</option>
        <option value="following">Following</option>
      </select>
      <span className="focus"></span>
    </div>
  );
};

export default FilteredUsers;
