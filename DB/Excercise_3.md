#### Retrieve all data from the table 'Science_Class'

```
SELECT * FROM science_class;
```

#### Retrieve the name of students who have scored more than 60 marks

```
SELECT name FROM science_class WHERE science_marks > 60;
```

#### Retrieve all data of students who have scored more than 35 but less than 60 marks

```
SELECT * FROM science_class WHERE science_marks BETWEEN 35 AND 60;
```

#### Retrieve all other students i.e. who have scored less than or equal to 35 or more than or equal to 60.

```
SELECT * FROM science_class WHERE NOT science_marks BETWEEN 35 AND 60;
```