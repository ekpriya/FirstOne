#include<iostream>
#include<conio.h>
using namespace std;

class college
{
	public:
		int id,age;
		char name[20];
};
class detail:public college
{
	public:
		int maths,physics,english,g;
		void studdetail()
	   {
			cout<<" \n enter id,age,name,maths,physics,english,g:";
			cin>>id>>age>>name>>maths>>physics>>english>>g;
		}
		void display()
		{
			studdetail();
			cout<<"\nid"<<id<<" \n age"<<age<<"\n name"<<name<<"\n maths"<<maths;
		}
		};
	int	main()
		{
			detail obj;
			obj.display();
			return 0;
		}


