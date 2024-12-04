var tipuesearch = {"pages": [{'title': 'About', 'text': '國立虎尾科技大學機械設計工程系 \n National Formosa University \n Department of Mechanical Design Engineering \n cp2024 計算機程式 \n 課程教材: \n Learn Python with Jupyter  ( site ,  ebook ) \n 教育版帳號\xa0microsoftonline 登入點:\xa0 https://login.microsoftonline.com/ \n Teams 線上教學: \n 以 "學號@nfu.edu.tw" 登入  https://login.microsoftonline.com/  Office 365 \n Teams 團隊代碼:  ldodwua \n 個人倉儲: https://github.com/mdecp2024/hw-41323203 \n 個人網站: https://mdecp2024.github.io/hw-41323203 \n 其他資訊: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n', 'tags': '', 'url': 'About.html'}, {'title': 'Attendance', 'text': '出席 (10%) - 自行舉證評分 \n 自行利用 Github commits 提交記錄評分. \n', 'tags': '', 'url': 'Attendance.html'}, {'title': 'HW 1', 'text': '主題: 基於瀏覽器的分散式版次管理與整合程式開發環境 (10%) \n USB 隨身碟: \n 下載  python_2025_lite.7z  (428 MB, 解開壓縮後約 1.5 GB) \n Jupyter \n What are Github and Codespaces? \n Hello World - GitHub Docs \n 利用包含學號的字串作為帳號, 申請免費使用 Github. \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 1 \n \n PART 1: Creating the basics 資料整理 (10%) \n 啟動可攜程式系統後, 在命令列中: \n y:\\>cd notebook \n y:\\notebook>jupyter lab --collaborative \n 進入  01_string_input_print.ipynb  練習如何修改 PART1 notebook 後存檔, 上傳至作業倉儲中的 downloads 目錄後, 透過  https://nbviewer.org/  將已經提交的  01_string_input_print.ipynb , 嵌入下列網頁中. \n \n 上列 iframe 標註的 html 語法: \n <iframe width="600" height="400" src="https://nbviewer.org/urls/mde.tw/cp2024_hw/downloads/01_string_input_print.ipynb"></iframe> \n 完成上述流程整理後, 請將 HW1 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 1.html'}, {'title': 'HW 1 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 Topic 1 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 1 Exam.html'}, {'title': 'w7', 'text': 'Brython建立 \n \n', 'tags': '', 'url': 'w7.html'}, {'title': 'w10', 'text': '題目一 \n 操作: \n  Brython  \n 1.複製程式一的原始碼 \n  2.到個人網站的Brython \n  3.清除輸出區  \n 4.貼上程式一的原始碼 \n  5.Run  \n SciTE 編輯器 \n  1.開啟SciTE 編輯器  \n 2.儲存檔案 \n  3.貼上程式一的原始碼 \n  4.Tool--Go  \n 命令提示字元視窗 \n  1.開啟命令提示字元視窗 \n  2.輸入cmd  \n 3.輸入python  \n 4.貼上程式一的原始碼 \n  Jupyter Lab  \n 1.開啟命令提示字元視窗 \n  2.輸入cd notebook  \n 3.輸入jupyter lab --collaborative \n  4.進入Jupyter Lab網頁  \n 5.建立new launcher  \n 6.貼上程式一的原始碼  \n 7.執行  \n Codespaces  \n 1.新增檔案 /檔案名稱.py \n  2.安裝python模組  \n 3.新增終端機  \n 4.貼上程式一的原始碼  \n 5.輸入python exam.py  \n 6.執行  \n 心得:  \n 利用這次測驗，我學到5種不同工具寫程式的方法，所以如果其中一種不能使用，還是有很多其他的工具可以用，其中我發現在Codespaces新增檔案時，檔案命名的最後沒有加.py，會導致程式無法執行。 \n 操作影片如下: \n \n \n \n 題目二 \n 請問 Python 程式中有關變數的命名, 除了必須以"_", 以及英文大小寫字母開頭之外, 還有甚麼需要特別注意的地方? \n 與所謂的"關鍵字"( Keywords )有關係嗎? \n Answer: \n 1.不可以用數字開頭，變數名稱的第一個字母必須是大小寫英文字母 。 \n 2.變數名稱不能與Python關鍵字或函式名稱相同。 關鍵 字如print、def、if、else、for 等等，原本就是在Python中會被使用到的，不能被拿來作為變數的名稱。 \n \n 請實際舉例, 針對 Python 程式命名的規則編寫程式, 並採上一題的五種程式執行方法, 展示正確變數命名與違反變數命名時, 所顯示的錯誤訊息回應. \n \n \n 操作影片如下: \n \n 題目三 \n 解題流程:  \n 利用 Python 程式解決物理問題  \n A jet touches down at velocity 310 km/h. Find the constant acceleration required to stop the aircraft 1000 m down the runway. \n  解: \n  1.先給定值  \n 2.利用方程式 v^2 = v0^2 + 2ad 求解加速度 (a) \n  3.最後得到答案:所需的恆定加速度為-3.71 m/s²。  \n \n  利用 Python 程式解決微積分問題  \n Under ideal conditions a certain bacteria population is known to double every three hours. Suppose that there are initially 100 bacteria. When will the population first reach 50,000 ? \n  解:  \n 1.導入數學  \n 2.先給定值  \n 3.計算人口達到P_target的時間 方程式: t = T * math.log(P_target / P0, 2) \n  3.最後得到答案:26.90後人口將首次達到50000。  \n \n  心得: \n \n 利用python來算物理及微積分的問題，只要將題目所給的資訊及方程式，輸入給python，就能夠得到答案非常方便，但這個前提是要有公式，才能解題，之後我希望可以學到如何用python證明公式是正確的。 \n \n \n 操作影片如下: \n \n \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w11', 'text': '題目一\xa0 請將此程式延伸到可以在 10x10 的字元區域中, 以 "*" 字元列印出圓型區域. 完成後請將程式碼存入個人 Gist 後, 直接在個人作業網站中的 Brython 頁面中執行. (提示: ?src=gist_script_URL) \n 第1題的Brython頁面 \n \n \n \n 題目二 已知可以在網頁中利用 Brython 繪製方格與塗色, 如下連結, 請設法修改此一程式, 直接將程式存入個人的 Gist, 並利用黑色方塊圍出一個圓形區域. \n \n \n 第2題的Brython頁面 \n \n \n \n \n 心得: \n 這次作業我發現給gpt一個正確的關鍵字非常重要，前面好幾次我做出來的圓都是不規則形狀的，後來發現是*的字形必須是全形才能做出一個完整的圓。 \n \n 3. \n 11/27程式1 \n \n 11/27程式2 \n', 'tags': '', 'url': 'w11.html'}, {'title': 'w12', 'text': '01 \n input():會讓程式暫停，等待使用者輸入一些文字，python在取得使用者輸入文字後，會把輸入的文字存到一個變數內 \n 範例: input("What\'s your favorite color?") \n print():列印輸出 \n 範例: cat \n \n 02 \n 字串:以成對的引號來呈現，單引號、雙引號 、三個單引號、三個雙引號都可以拿來表示字串，代表文字的意思 \n 範例: 姓氏 名字 \n 兩個字串相加使用+ \n 範例: 姓名+最喜歡的食物 \n \n 03 \n if... in.../else...:判斷輸入的文字有沒有在字串內 \n 範例: 買書 \n \n 04 \n .append()/.remove():在清單內增加或刪除項目 \n 範例: 購物清單 \n \n 05 \n .index() :可以用來搜尋字串中指定字元的位置，它會回傳第一個符合條件的字元的索引值 \n .pop():移除並傳回集合中的任意元素 \n .insert():將一個項目插入至 list 中給定的位置 \n 範例: 今日菜單 \n \n 06 \n [ start : stop : step ] \n start(起始索引):切片開始的位置，默認為0 \n stop(結束 索引 ): 切片結束的位置(不包含該索引位置的元素) \n step(步長):每次跳過的元素數量，默認為1 \n 範例: 環遊世界 \n \n 07 \n 索引修改:使用單一索引修改清單中的某個元素（如 \xa0 senses[1] ） \n 分片替換:用切片語法（如 \xa0 senses[3:5] ）修改一段區間的元素 \n 帶步長的切片修改:通過步長語法（如 \xa0 senses[0:3:2] ）選擇非連續的元素進行替換 \n 範例: 感官 \n 1.[:5]:取出索引 0 到 4 的元素 \n 2. [:5]: 取出索引 5 之後的元素 \n 範例: 行星 \n del  語句 ： \n 刪除清單中的元素，或刪除整個清單 \n 使用單一索引（如  del house[1] ）刪除特定位置的元素 \n 使用切片語法（如  del house[4:6]  或  del house[::2] ）刪除多個元素 \n 直接對變數使用  del （如  del house ），會刪除變數本身 \n 範例: 房子 \n \n \n', 'tags': '', 'url': 'w12.html'}, {'title': 'HW 2', 'text': '主題: Python 的數列、判斷式與重複迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 2 and Part 3 \n \n 延續 HW 1 網頁資料整理與程式練習方法, 整理下列內容 (20%): \n PART 2: Introduction to lists and if/else statements \n PART 3: Introduction to the for loop \n 完成上述流程整理後, 請將 HW2 自評分數輸入 cp2024 自評表單中.', 'tags': '', 'url': 'HW 2.html'}, {'title': 'HW 2 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 2 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 2 Exam.html'}, {'title': 'HW 3', 'text': '主題: Python 的數字、演算法與迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 4 and Part 5 \n 完成上述流程整理後, 請將 HW3 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 3.html'}, {'title': 'HW 3 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 3 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 3 Exam.html'}, {'title': 'w8', 'text': '開啟 coppeliaSim.exe\xa0及 start_ipv6.bat \n 將put_cubes_into_scene_1.py開啟到可攜程式，點擊Tools - Go \n coppeliaSim.exe就會執行出模擬場景 \n \n', 'tags': '', 'url': 'w8.html'}, {'title': 'HW 4', 'text': '主題: 利用 Python 控制機電模擬系統 (20%) \n 利用\xa0 https://solvespace.com/ \xa0建立機械系統零組件 \n 利用  CoppeliaSim  建立機電模擬系統 \n 利用  Python  跨網路控制瀏覽器上的機電模擬系統 \n 範例: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n 完成上述流程整理後, 請將 HW4 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 4.html'}, {'title': 'HW 4 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 4 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 4 Exam.html'}, {'title': 'Final Report', 'text': '期末口頭與書面專題報告 (20%) \n 期末口頭專題報告影片: \n ...... \n 期末書面專題報告檔案 (pdf): \n ...... \n 電腦輔助設計與實習課程總結心得: \n ...... \n 期末報告自評成績: \n 完成上述流程後, 請將 Final Report 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'Final Report.html'}, {'title': 'Brython', 'text': '從 1 累加到 100: \n 1 add to 100 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};