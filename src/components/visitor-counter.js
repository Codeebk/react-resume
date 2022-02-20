import Typography from "@mui/material/Typography";
import { Badge } from "@mui/material";

function VisitorCounter({ visitorCount }) {
  return (
    <div>
      <Badge badgeContent={visitorCount} color="primary">
          Total Visits
      </Badge>
    </div>
  );
}

export default VisitorCounter;
