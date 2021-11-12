import requests
data = {"Identity":"pixtest@gmail.com","category":"art","course title":"Learn To Draw A Cartoon Animal Character","course url":"https://pixemy.com/minis-detail/learn-to-draw-a-cartoon-animal-character-by-danielle-hruska","customer type":"Jotform","evtName":"pixemy mini slot booked","feedback form":"insert feedback form link","learning material":"insert learning material link","lesson number":"1","page":"minis course details page","parent name":"Yajas","slot date":"November 5rd, 5 PM PDT","teacher name":"Danielle Hruska"}
# headers = {
#   "X-CleverTap-Account-Id": "8WR-899-KR6Z",
#   "X-CleverTap-Passcode": "SCY-KUV-GWUL",
#   "Content-Type": "application/json; charset=utf-8",
# }
# data = '''{
#    "d":[{
#       "identity":"pixtest@gmail.com",
#       "ts":1636701907,
#       "evtName":"pixemy mini slot booked",
#       "type":"event",
#       "evtData":{
#          "category":"art",
#          "courseTitle":"Learn To Draw A Cartoon Animal Character",
#          "courseUrl":"https://pixemy.com/minis-detail/learn-to-draw-a-cartoon-animal-character-by-danielle-hruska",
#          "feedbackForm":"insert feedback form link",
#          "learningMaterial":"insert learning material link",
#          "lessonNumber":"1",
#          "page":"minis course details page",
#          "slotDate":"November 5rd, 5 PM PDT",
#          "teacherName":"Danielle Hruska"
#       }
#    }]
# }'''
requests.post('http://localhost:80/upload', data)
# print(requests.post("https://api.clevertap.com/1/upload", data, headers=headers).json())