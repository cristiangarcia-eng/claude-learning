# Requirements: Team Workspaces

## Functional Requirements

### Workspace Creation
- R1: Users on Pro or Enterprise plans can create a new workspace
- R2: Workspace name is required, description is optional
- R3: Creator automatically becomes workspace Admin

### Team Management
- R4: Admins can invite users by email address
- R5: Three roles: Admin, Editor, Viewer
- R6: Admins can change roles and remove members
- R7: Users can belong to multiple workspaces

### Workflow Templates
- R8: Three default templates available at workspace creation
- R9: Kanban template: columns for Backlog, In Progress, Review, Done
- R10: Sprint template: two-week cycles with planning and review milestones
- R11: Simple List template: flat task list with status tags

### Activity Feed
- R12: All workspace actions logged in a feed
- R13: Feed shows: task created, task moved, member joined, comment added
- R14: Users can filter feed by member or action type

### Permissions
- R15: Viewers can see all tasks and comments but cannot edit
- R16: Editors can create, edit, and move tasks
- R17: Admins can do everything plus manage members and settings

## Non-Functional Requirements
- R18: Workspace page load time under 2 seconds
- R19: Support up to 50 members per workspace at launch
- R20: All workspace data encrypted at rest

## Open Questions
- What happens to a workspace if the only Admin leaves?
- Should we send email notifications for every activity feed event?
- How do we handle the free plan? Can they see workspaces but not create them?
