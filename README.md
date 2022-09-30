# mock-serve
An API mock executable to run a Mock API server

## How to Use

### Using Command Line Argument

The executable accept 2 command line arguments. First one is the URL of the API and the second one is the file path, which contains the API response. The URL must be a local URL (starting with http://localhost or http://127.0.0.1), but you can use any custom port. The path leading to the File should contain the API response and the file extensions helps determine the Response content type of the API. The Path can be absolute or relative.

```
mock-serve-win.exe "http://localhost:8080/api" "d:\mock-serve\resp.json"
```

### 'mock-serve - How to use' video

See how to use mock-serve to start a mock api in seconds. See the video below.

[![Start a Mock API for API Testing in seconds using mock-serve](http://img.youtube.com/vi/f1UlyfOun4s/0.jpg)](https://www.youtube.com/watch?v=f1UlyfOun4s "Start a Mock API for API Testing in seconds using mock-serve")

### Using In App Prompt

If no command line argument is provided to the app, the app will prompt for the URL of the API and the file path containing the response.

```
mock-serve-win.exe
prompt: Enter URL of API:  (http://localhost:8080/) http://localhost:8080/api
prompt: Enter Path to the file containing Response:  D:\mock-serve\resp.json
NodeJS API accessible at http://localhost:8080/api
```

## Download mock-serve

You can directly download the executable version of the mock-serve API Mock app.

[Download mock-serve for Windows](https://github.com/prithwirajbose/mock-serve/raw/main/mock-serve-win.exe)

[Download mock-serve for Linux](https://github.com/prithwirajbose/mock-serve/raw/main/mock-serve-linux)

[Download mock-serve for MacOS](https://github.com/prithwirajbose/mock-serve/raw/main/mock-serve-macos)
