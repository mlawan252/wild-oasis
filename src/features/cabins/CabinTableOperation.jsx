import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";
function CabinTableOperation() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { label: "All", value: "all" },
          { label: "With discount", value: "with-discount" },
          { label: "No discount", value: "no-discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "Sort by name (A-Z)" },
          { value: "name-des", label: "Sort by name (Z-A)" },
          { value: "regularPrice-dec", label: "Sort by Price (High to Low)" },
          { value: "regularPrice-asc", label: "Sort by Price (Low to High)" },
          { value: "maxCapacity-des", label: "Sort by capacity (High to Low)" },
          { value: "maxCapacity-asc", label: "Sort by capacity (Low to High)" },
        ]}
      />
    </TableOperations>
  );
}
export default CabinTableOperation;
