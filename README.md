To Execute Application 

RUN : docker-compose --env-file backend/.env up


```shell
to push data using cli --->  curl -X POST -H "Content-Type: application/json" -d '{"title": "New Workout", "reps": 3, "load": 50}' http://node_ip-address:3000/api/workouts


NOTE: in node ip address : put node ip address using : kubectl get nodes -o wide
```