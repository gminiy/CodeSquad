# 리눅스, 쉘 명령어

## SUDO (Super User DO)

UNIX 계열은 다중 사용 시스템이기 때문에 권한(Permission)에 대한 정책이 필요하다.

super user의 권한으로 명령을 수행한다.

## WGET

명령어로 파일을 다운로드하는 명령어

```bash
wget http://뭐시기저시기.com/download
```

## Output Redirection

'>'는 standard output 을 redirection한다.

'2>'는 error output을 redirection한다.

```bash
rm nofile.txt > result.txt
//rm cannot remove 'nofile.txt': No such file or directory.
//This error message will be displaied on terminal.
rm nofile.txt 2> error.txt
//Error message will be written in error.txt
```

## Input Redirection

'<'는 standard input(stdin)을 file에서 읽어온다.

```bash
cat hello.txt
// hello.txt 를 cat의 argument로 받아서 실행
cat < hello.txt
// hello.txt 의 내용을 cat의 standard input으로 받아서 실행.
```

## find 디렉토리 -name "파일이름"

지정한 디렉토리와 그 하위디렉토리에서 해당 파일을 검색한다.

```
# temp로 시작하는 이름을 가진 모든 파일이 검색됨
find . -name "temp*"
```

## pbcopy, pbpaste

맥 전용 명령으로 클립보드 복사 / 붙여넣기로 활용할 수 있다.

```bash
cat some.txt | pbcopy
pbpaste > some2.txt
```

## Pipes

파일뿐만 아니라 다른 프로그램에서도 표준 스트림 리디렉션을 할 수 있습니다. **Pipes**를 이용하여 프로그램 출력을 다른 곳 입력으로 사용할 수 있습니다.

다음 예시에서는 `command1` 출력을 `command2`로 보내고, 그 출력을 다시 `command3` 입력으로 보냅니다:

```
command1 | command2 | command3
```

이런 구조를 **파이프라인** 이라고 부릅니다.

사실 몇 가지 프로그램을 통해서 데이터를 처리하는 데 사용할 수 있습니다. 예를 들어 `ls -l`로 출력한 값에서 `grep` 명령을 이용하여 `.md`확장자를 가진 파일만 출력한 뒤 `less` 프로그램으로 출력해줍니다:

```
ls -l | grep .md$ | less
```

파이프라인에서 종료 상태는 일반적으로 마지막 명령이 끝나는 시점입니다. 파이프라인에서 작동 중인 모든 명령이 완료될 때까지 셸 상태를 반환하지 않습니다. 파이프라인으로 연결된 명령 중 하나가 실패하였을 때, 연결된 파이프라인이 모두 실패로 설정하고 싶다면 다음과 같이 pipefail 옵션을 설정해야 합니다:

```
set -o pipefail
```

## Lists of commands

**명령어 나열**은 `;`, `&`, `&&`, `||` 연산자를 이용하여 하나 이상 파이프라인에 대한 순서를 나타냅니다.

명령이 제어 연산자 `&`에 의해서 종료될 경우, 셸은 서브 셸에서 비동기적으로 명령을 실행합니다. 다른 말로 하자면, 명령이 백그라운드로 실행됩니다.

`;`로 구분된 명령은 차례로 실행됩니다: 차례로. 셸은 각 명령이 종료될때까지 기다립니다.

```
# command2 will be executed after command1
command1 ; command2

# which is the same as
command1
command2
```

`&&`와 `||`로 구분된 명령어 나열은 각각 _AND_와 *OR* 목록이라고 합니다.

_AND_list_는 다음과 같습니다:

```
# command2 will be executed if, and only if, command1 finishes successfully (returns 0 exit status)
command1 && command2
```

_OR-list_는 다음과 같습니다:

```
# command2 will be executed if, and only if, command1 finishes unsuccessfully (returns code of error)
command1 || command2
```

*AND* 또는 *OR* 명령어 나열에서 반환 코드는 마지막으로 실행한 명령에 대한 종료 상태입니다.

## 키보드 입력 받기

```bash
$ read INPUT
Hello, Woowa
$ echo $INPUT
Hello, Woowa
```



## Parameter 처리

$# : parameter 개수

$(num) : parameter

$0 : 쉘스크립트이름(프로그램 이름)

```bash
# ! /bin/bash

VAR1=$#
echo "num=$#"
echo "parameter : $0 $1 $2 $3"
echo "parameter : $@"
echo "VAR1 = $VAR1"
echo 'VAR1 = $VAR1'
```

## test

조건식이 참이면 0, 거짓이면 1을 리턴함

```bash
$ test 1 = 2; echo $?
$ [ 1 = 2 ]; echo $?
```

## 문자열 비교

[[ expr ]] 를 사용하는 것이 좋다.

```bash
[[ $a == $b ]]
[[ $a == hello* ]]
[[ $a != $b ]]
```
## 쿼터('', "", \, ₩)

### 싱글쿼터('') 

문자열 표현, 변수해석 불가능

### 더블쿼터("")

문자열 표현, 변수해석 가능

### 이스케이프 시퀀스(\\)

기능을 가진 문자의 기능을 없애고 일반 문자로 표현

### 백쿼터(₩)

감싼 내용을 명령어로 치환
