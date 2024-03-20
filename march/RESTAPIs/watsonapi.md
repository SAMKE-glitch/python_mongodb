Watson Speech to Text Translator

Introduction
In this notebook, you will learn to convert an audio file of an English speaker to text using a Speech to Text API. Then, you will translate the English version to a Spanish version using a Language Translator API. Note: You must obtain the API keys and endpoints to complete the lab.

#you will need the following library 
!pip install ibm_watson wget

Speech to Text
First we import SpeechToTextV1 from ibm_watson. For more information on the API, please click on this link.(https://cloud.ibm.com/apidocs/speech-to-text?utm_medium=Exinfluencer&utm_source=Exinfluencer&utm_content=000026UJ&utm_term=10006555&utm_id=NA-SkillsNetwork-Channel-SkillsNetworkCoursesIBMDeveloperSkillsNetworkPY0101ENSkillsNetwork1005-2022-01-01&code=python)

from ibm_watson import SpeechToTextV1 
import json
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator
