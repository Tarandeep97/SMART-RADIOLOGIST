# SMART RADIOLOGIST - Covid19 normal xray Diagnoser
## AI based solution for automated radiology.
### Introduction
The WHO has now declared COVID19 a pandemic. The virus has been named SARS-CoV-2 and the disease is now called COVID-19. It is estimated to kill more than 1 million people. It is estimated that will kill more children and Older people than HIV/AIDS, malaria, dengue combined this year. One of symptoms of COVID19 is pneumonia. Bacterial & Viral pathogens are leading cause of Pneumonia. Timely and correct diagnosis is important as pneumonia require immediate attention. Radiography
is early stage standard step to identify pneumonia cause. When chest X-rays are interpreted
by a radiologist, he/she can perhaps tell cause of pneumonia. However, rapid interpretation of
X-rays is not possible, due to unavailability of resources in some developing countries,
especially in African Countries.
In this project, I have used a technique Convolutional Neural Networks to automatically detect Pneumonia caused by COVID, Bacteria or Viral from X-ray Images. Deep learning model is embedded in browser application so as to reduce computational cost.
It shows an accuracy of about 84.67% on unseen Xrays. After this campaign, I would like to improve its accuracy above 90%, deploy it in production for public use and publish it in top conferences and journals.

### Dataset : [COVID-19 & Normal Posteroanterior(PA) X-rays](https://www.kaggle.com/tarandeep97/covid19-normal-posteroanteriorpa-xrays)

### Neural Network Architecture 

```Model: "sequential_3"
_________________________________________________________________
Layer (type)                 Output Shape              Param #   
=================================================================
conv2d_12 (Conv2D)           (None, 224, 224, 32)      896       
_________________________________________________________________
conv2d_13 (Conv2D)           (None, 224, 224, 32)      9248      
_________________________________________________________________
max_pooling2d_8 (MaxPooling2 (None, 112, 112, 32)      0         
_________________________________________________________________
batch_normalization_10 (Batc (None, 112, 112, 32)      128       
_________________________________________________________________
conv2d_14 (Conv2D)           (None, 112, 112, 64)      18496     
_________________________________________________________________
batch_normalization_11 (Batc (None, 112, 112, 64)      256       
_________________________________________________________________
max_pooling2d_9 (MaxPooling2 (None, 56, 56, 64)        0         
_________________________________________________________________
dropout_9 (Dropout)          (None, 56, 56, 64)        0         
_________________________________________________________________
conv2d_15 (Conv2D)           (None, 56, 56, 128)       73856     
_________________________________________________________________
conv2d_16 (Conv2D)           (None, 56, 56, 128)       147584    
_________________________________________________________________
max_pooling2d_10 (MaxPooling (None, 28, 28, 128)       0         
_________________________________________________________________
batch_normalization_12 (Batc (None, 28, 28, 128)       512       
_________________________________________________________________
dropout_10 (Dropout)         (None, 28, 28, 128)       0         
_________________________________________________________________
conv2d_17 (Conv2D)           (None, 28, 28, 256)       295168    
_________________________________________________________________
max_pooling2d_11 (MaxPooling (None, 14, 14, 256)       0         
_________________________________________________________________
batch_normalization_13 (Batc (None, 14, 14, 256)       1024      
_________________________________________________________________
dropout_11 (Dropout)         (None, 14, 14, 256)       0         
_________________________________________________________________
flatten_3 (Flatten)          (None, 50176)             0         
_________________________________________________________________
dense_5 (Dense)              (None, 512)               25690624  
_________________________________________________________________
batch_normalization_14 (Batc (None, 512)               2048      
_________________________________________________________________
dropout_12 (Dropout)         (None, 512)               0         
_________________________________________________________________
dense_6 (Dense)              (None, 4)                 2052      
=================================================================
Total params: 26,241,892
Trainable params: 26,239,908
Non-trainable params: 1,984
```

![Screenshot_2020-05-22 Screenshot](https://user-images.githubusercontent.com/28994081/82685730-4e2d0700-9c72-11ea-9710-e015e956456d.png)
