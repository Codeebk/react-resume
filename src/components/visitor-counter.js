import Typography from "@mui/material/Typography";
import { Badge, Container } from "@mui/material";

function VisitorCounter({ visitorCount }) {
  return (
    <>
      <Badge badgeContent={visitorCount} color="primary" >
        Total Visits
      </Badge>
    </>
  );
}

export default VisitorCounter;
