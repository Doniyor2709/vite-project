import { memo } from "react";
// import { memo, useMemo } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { groups } from "../../data/groups";

import PropTypes from "prop-types";

const StudentHeader = ({ setSearch, search, group, setGroup }) => {
  console.log("StudentHeader");
  return (
    <InputGroup className="mb-3">
      <Form.Control
        value={search}
        onChange={(e) => setSearch(e.target.value.trim().toLowerCase())}
        placeholder="Searching products"
      />
      <InputGroup.Text>
        <Form.Select value={group} onChange={(e) => setGroup(e.target.value)}>
          <option value="all">all</option>
          {groups.map((group) => (
            <option key={group} value={group}>
              {group}
            </option>
          ))}
        </Form.Select>
      </InputGroup.Text>
      {/* <div className="alert alert-warning">{sum}</div> */}
    </InputGroup>
  );
};

StudentHeader.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
  group: PropTypes.string,
  setGroup: PropTypes.func,
};

const MemoStudentHeader = memo(StudentHeader);

export default MemoStudentHeader;
