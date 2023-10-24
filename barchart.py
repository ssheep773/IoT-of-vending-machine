import numpy as np
import matplotlib.pyplot as plt
# 讓中文正常顯示
plt.rcParams['font.sans-serif'] = ['Taipei Sans TC Beta']

#---------------------------讀取資料的部分_----------
drink = ['FIN','FIN','FIN','FIN','FIN', '礦泉水','礦泉水','礦泉水','礦泉水','礦泉水','礦泉水','礦泉水','礦泉水','礦泉水','礦泉水','礦泉水', '巧克力奶茶', '原味奶茶']
reserve_amount = [8, 7,5,5,5,5,5,5,5,5,5,5,5,5,5,5, 0, 1]
total_amount = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,8,8]
#--------------------------------------------------
fig = plt.figure()
# y軸長度
y = np.arange(len(drink))
# x軸長度
x = np.amax(total_amount) + 3
# 劃出長條圖
plt.barh(y, total_amount, color='red' , label='庫存總數' )  #這行要先寫要不然會蓋掉別人
plt.barh(y, reserve_amount, color='blue' , label='剩餘數量')
# label 顯示
plt.legend(bbox_to_anchor=(1,1), loc='best')

plt.xticks(np.arange(x))  # 設定x刻度
plt.yticks(y, drink)      # 設定y刻度

plt.title('高大風雨球場 機台庫存')

plt.xlabel('數量')
plt.ylabel('飲料名稱')
fig.set_size_inches(10, 7)

plt.savefig('plot1.png')
# plt.show()
