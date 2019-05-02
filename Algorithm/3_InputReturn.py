while True:
    try:
        print(input())
    except EOFError:
        break

// Exception : EOFError : Raised when one of the built-in functions 
              (input() or raw_input()) hits an end-of-file condition (EOF) without reading any data. 
              (N.B.: the file.read() and file.readline() methods return an empty string when they hit EOF.)
