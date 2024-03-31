# Time Stamp Api

## "/api/:date?"

### -- default_Url/api/2024-03-31
### -- default_Url/api/1711877342891

#### -- with out any parameter
          returns => return a josn ({
            "unix": current timestamp,
            "utc" : current UTC time without offset
          })

#### -- For any valid date format 
          return a josn ({
            "unix": 1711877342891,
            "utc" : 'Sun, 31 Mar 2024 09:32:19 GMT'
          })

#### -- for invalid request 
          Return a json ({"error": "Invalid Date"})

