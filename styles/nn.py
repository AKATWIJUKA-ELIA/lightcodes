class Light_Tech():
      def __init__(self,name,skills,proffession):
            
            self.name = name
            self.skills = skills
            self.proffession = proffession
            
      def Hire(self):
            
            return'''Hello {} is Ready \n
            for hire as a {} with the following skills {}
            and more ...'''.format(self.name,self.proffession,self.skills)
      
name = 'Elia'      
skills = ['python','React','Web Development']
proffession = 'Software Engineer'

light = Light_Tech(name,skills,proffession)

print(light.Hire())