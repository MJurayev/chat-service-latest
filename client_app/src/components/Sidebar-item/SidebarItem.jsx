import { ListItem, Avatar, ListItemIcon, ListItemText, Badge, Box } from '@mui/material';
import './Sidebar-item.css';

export default function SidebarItem({user }) {
  return (
    <ListItem selected={false} button>
      <ListItemIcon>
        <Badge
          color="primary"
          invisible={true}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          variant="dot"
        >
          <Avatar alt={`${user.name} ${user.surname}`} src={user?.imageSrc} />
        </Badge>
      </ListItemIcon>

      <ListItemText className="sidebar__item__text" primary={`${user.name} ${user.surname}`} />
      <Box className="sidebar__item__unread">{2}</Box>
    </ListItem>
  );
}
