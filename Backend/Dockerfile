# Step 1 select default OS image
FROM python:3.6


# # Step 3 Configure a software
# # Defining working directory
WORKDIR /app

# # Copy everything which is present in my docker directory to working (/app)
COPY . .

RUN pip install pymongo
RUN pip install pymongo[srv]
RUN python -m pip install pymongo[tls]
RUN pip install flask
RUN pip install flask_cors

EXPOSE 5000

# Step 4 set default commands
# These are permanent commands i.e even if user will provide come commands those will be considered as argunemts of this command
ENTRYPOINT [ "python" ]

# These commands will be replaced if user provides any command by himself
CMD ["server.py"]