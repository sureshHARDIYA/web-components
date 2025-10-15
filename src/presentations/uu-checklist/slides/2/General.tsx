import { Appear } from "spectacle";
import styled from "styled-components";
import checklistData from "../checklist.json";

const TableContainer = styled.div`
  display: table;
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  table-layout: fixed;
`;

const TableHeader = styled.div`
  display: table-header-group;
`;

const TableHeaderRow = styled.div`
  display: flex;
  background-color: #2c3e50;
`;

const TableHeaderCell = styled.div`
  display: table-cell;
  padding: 16px 20px;
  font-weight: 600;
  color: white;
  border: 1px solid #34495e;
  text-align: left;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  width: 50%;
  box-sizing: border-box;
`;

const TableBody = styled.div`
  // display: table-row-group;
`;

const TableRow = styled.div`
  display: flex;
  &:hover {
    background-color: #dadada;
  }
`;

const TableCell = styled.div`
  display: table-cell;
  padding: 16px 20px;
  border: 1px solid #e0e0e0;
  vertical-align: top;
  color: #2c3e50;
  font-size: 16px;
  line-height: 1.5;
  width: 50%;
  box-sizing: border-box;
`;

const NotesCell = styled(TableCell)`
  color: #34495e;
  font-size: 13px;

  a {
    color: #3498db;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  code {
    background-color: #f1f2f6;
    padding: 2px 6px;
    border-radius: 3px;
    font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
    font-size: 12px;
    color: #e74c3c;
  }

  kbd {
    background-color: #2c3e50;
    color: white;
    padding: 2px 6px;
    border-radius: 3px;
    font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
    font-size: 11px;
  }
`;

export const SMARTRow = ({ title, notes, required = true }: any) => {
  return (
    <Appear>
      <TableRow>
        <TableCell>
          <p-checkbox-wrapper label={title} required={required}>
            <input name="some-name" type="checkbox" onChange={() => {}} />
          </p-checkbox-wrapper>
        </TableCell>
        <NotesCell dangerouslySetInnerHTML={{ __html: notes }} />
      </TableRow>
    </Appear>
  );
};

const FullWidthWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const GeneralPrinciples = ({
  keyName = "general",
}: {
  keyName: string;
}) => {
  const generalChecklist = (checklistData as any)[keyName] || [];

  return (
    <Appear>
      <FullWidthWrapper>
        <TableContainer>
          <TableHeader>
            <TableHeaderRow>
              <TableHeaderCell>Checklist Item</TableHeaderCell>
              <TableHeaderCell>Notes</TableHeaderCell>
            </TableHeaderRow>
          </TableHeader>
          <TableBody>
            {generalChecklist.map((item: any, index: number) => (
              <SMARTRow
                key={index}
                title={item.title}
                notes={item.notes}
                required={true}
              />
            ))}
          </TableBody>
        </TableContainer>
      </FullWidthWrapper>
    </Appear>
  );
};
