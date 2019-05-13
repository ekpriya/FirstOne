#include<iostream>
using namespace std;
int main()
{
	string str1="kavi priya";
	string str2="kavi";
	str1.replace(str1.find(str2),str2.length(),"savi");
	cout<<str1;
	return 0;
}
