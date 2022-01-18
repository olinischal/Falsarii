# GITHUB BRANCHING STRATEGY
All ready for deployment code will stay in "Main" branch
- We will merge develop branch code every week after confirming the checklist is passing.
- Only this branch code will be deployed to production.

All working branch will be merged to "develop" branch
- All new branch will be created off of this branch.
- Pull Reguest (PR) will be against this branch.

#Getting started
Before starting your work, check the status of branch with
- git status
change the branch to develop
- git checkout develop
get the latest code from repo with
- git pull
create new branch, branching name: feature_name_you_working_on and "-1" or "-2" and so on
- git checkout -b <some_branch-1> 
make your changes and add the changes with
- git add .
commit the changes with appropriate message
- git merge -m 'some relevant info about the change'
push the changes
- git push origin <some_branch-1>
go to github and create a Pull Request(PR) against "develop"
post the PR url to code review channel in Discord for code review
ask another team mate for code review. If passed squash and merge, if failed ask PR author to make the necessary changes.



