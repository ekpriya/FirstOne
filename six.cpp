#include<iostream>
using namespace std;
int a=5;  //global
int main()
{
	int b=6; //local
	cout<<"printing b \n";
	cout<<"sum="<<a+b;
	return 0;
}

