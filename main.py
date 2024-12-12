import pandas as pd
import numpy as np

class Read:
    def __init__(self, file):
        self.file = file
    
    def read(self):
        df = pd.read_csv(self.file)
        return df
    
class Process:
    def __init__(self, df, text):
        self.df = df
        self.text = text
        self.arr = None
        self.flag = 0

    def preprocess(self):
        arr = []
        for i in self.df['words']:
            arr.append(i.lower())
            
        self.arr = np.array(arr)
        
    def calculate(deletewords: list, text: list) -> bool:
        ld = len(deletewords)
        lt = len(text)
        
        ps = ld / lt
        pn = 1 - ps
        
        print('Spam probability:', ps)
        print('Not spam probability:', pn)
        
        if ps > pn or ps == pn or ps == pn / 2 or ps == pn * 0.3:
            return True
        return False
        
    def isSpam(self) -> str:
        deletewords = []
        for word in self.text:
            if word in self.arr:
                self.flag += 1
                deletewords.append(str(word))
        
        if self.flag > 0:
            if (Process.calculate(deletewords, self.text)):
                return "Spam detected"
            return "Test passed"
        else: 
            return "Test passed"
        