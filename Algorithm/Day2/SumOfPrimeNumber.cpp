#include <vector>
#include <stdio.h>

using namespace std;
bool* ArrBool;
void Prime(int n) {
    for(int i = 0; i <= n; i++) {
        ArrBool[i] = true;
    }
    
    for(int i = 2; i <= n; i++) {
        if(ArrBool[i]) {
            for(int j = i+i; j <= n; j += i) {
                ArrBool[j] = false;
            }
        }
    }
}

long long solution(int N) {
    long long answer = 0;
    ArrBool = new bool[N+1];
    Prime(N);
    for(int i = 2; i <= N; i++) {
        if(ArrBool[i]) {
            answer += i;
        }
    }
    
    return answer;
}
