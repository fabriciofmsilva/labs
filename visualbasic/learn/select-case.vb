Dim op As Integer = 1
Dim message As String

' If op = 1 Then
'   message = "One"
' End If
' If op = 2 Then
'   message = "Two"
' End If
' If op = 3 Then
'   message = "Three"
' End If

Select Case op
  Case 1
    message = "One"
  Case 2
    message = "Two"
  Case 3
    message = "Three"
  Case Else
    message = "Another value"
End Select
