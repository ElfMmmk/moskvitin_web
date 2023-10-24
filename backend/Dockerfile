FROM python:3.11-slim
ENV PYTHONUNBUFFERED=1
WORKDIR /backend
COPY requirements.txt .
RUN  pip install --upgrade pip \ 
    pip install -r requirements.txt
COPY . .
EXPOSE 8000
RUN ["chmod", "+x", "docker-entrypoint.sh"]
ENTRYPOINT [ "./docker-entrypoint.sh" ]
