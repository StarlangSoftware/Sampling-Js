Sampling Strategies
============

## K-Fold cross-validation
In K-fold cross-validation, the aim is to generate K training/validation set pair, where training and validation sets on fold i do no overlap. First, we divide the dataset X into K parts as X<sub>1</sub>; X<sub>2</sub>; ... ; X<sub>K</sub>. Then for each fold i, we use X<sub>i</sub> as the validation set and the remaining as the training set.

Possible values of K are 10 or 30. One extreme case of K-fold cross-validation is leave-one-out, where K = N and each validation set has only one instance.
If we have more computation power, we can have multiple runs of K-fold cross-validation, such as 10 x 10 cross-validation or 5 x 2 cross-validation.

## Bootstrapping

If we have very small datasets, we do not insist on the non-overlap of training and validation sets. In bootstrapping, we generate K multiple training sets, where each training set contains N examples (like the original dataset). To get N examples, we draw examples with replacement. For the validation set, we use the original dataset. The drawback of bootstrapping is that the bootstrap samples overlap more than the cross-validation sample, hence they are more dependent.

Video Lectures
============

[<img src="https://github.com/StarlangSoftware/Sampling/blob/master/video.jpg" width="50%">](https://youtu.be/wijWOiv70nE)

For Developers
============
You can also see [Java](https://github.com/starlangsoftware/Sampling), [Python](https://github.com/starlangsoftware/Sampling-Py), [Cython](https://github.com/starlangsoftware/Sampling-Cy), [C++](https://github.com/starlangsoftware/Sampling-CPP), [Swift](https://github.com/starlangsoftware/Sampling-Swift), or [C#](https://github.com/starlangsoftware/Sampling-CS) repository.

## Requirements

* [Node.js 14 or higher](#Node.js)
* [Git](#git)

### Node.js 

To check if you have a compatible version of Node.js installed, use the following command:

    node -v
    
You can find the latest version of Node.js [here](https://nodejs.org/en/download/).

### Git

Install the [latest version of Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

## Npm Install

	npm install nlptoolkit-sampling
	
## Download Code

In order to work on code, create a fork from GitHub page. 
Use Git for cloning the code to your local or below line for Ubuntu:

	git clone <your-fork-git-link>

A directory called util will be created. Or you can use below link for exploring the code:

	git clone https://github.com/starlangsoftware/sampling-js.git

## Open project with Webstorm IDE

Steps for opening the cloned project:

* Start IDE
* Select **File | Open** from main menu
* Choose `Sampling-Js` file
* Select open as project option
* Couple of seconds, dependencies will be downloaded. 

Detailed Description
============

+ [CrossValidation](#crossvalidation)
+ [Bootstrap](#bootstrap)
+ [KFoldCrossValidation](#kfoldcrossvalidation)
+ [StratifiedKFoldCrossValidation](#stratifiedkfoldcrossvalidation)

## CrossValidation

k. e??itim k??mesini elde etmek i??in

	getTrainFold(k: number): Array<T>

k. test k??mesini elde etmek i??in

	getTestFold(k: number): Array<T>

## Bootstrap

Bootstrap i??in BootStrap s??n??f??

	Bootstrap(instanceList: Array<T>, seed: number)

??rne??in elimizdeki veriler a adl?? ArrayList'te olsun. Bu veriler ??st??nden bir bootstrap 
??rneklemi tan??mlamak i??in (5 burada rasgelelik getiren seed'i g??stermektedir. 5 
de??i??tirilerek farkl?? samplelar elde edilebilir)

	bootstrap = Bootstrap(a, 5)

ard??ndan ??retilen sample'?? ??ekmek i??in ise

	sample = bootstrap.getSample()

yaz??l??r.

## KFoldCrossValidation

K kat ??apraz ge??erleme i??in KFoldCrossValidation s??n??f??

	KFoldCrossValidation(instanceList: Array<T>, K: number, seed: number)

??rne??in elimizdeki veriler a adl?? ArrayList'te olsun. Bu veriler ??st??nden 10 kat ??apraz 
ge??erleme yapmak i??in (2 burada rasgelelik getiren seed'i g??stermektedir. 2 
de??i??tirilerek farkl?? samplelar elde edilebilir)

	kfold = KFoldCrossValidation(a, 10, 2)

ard??ndan yukar??da belirtilen getTrainFold ve getTestFold metodlar?? ile s??ras??yla i. e??itim
ve test k??meleri elde edilebilir. 

## StratifiedKFoldCrossValidation

Stratified K kat ??apraz ge??erleme i??in StratifiedKFoldCrossValidation s??n??f??

	StratifiedKFoldCrossValidation(instanceLists: Array<Array<T>>, K: number, seed: number)

??rne??in elimizdeki veriler a adl?? ArrayList of listte olsun. Stratified bir ??apraz 
ge??erlemede s??n??flara ait veriler o s??n??f??n oran??nda temsil edildikleri i??in her bir 
s??n??fa ait verilerin ayr?? ayr?? ArrayList'te olmalar?? gerekmektedir. Bu veriler ??st??nden 
30 kat ??apraz ge??erleme yapmak i??in (4 burada rasgelelik getiren seed'i g??stermektedir. 4 
de??i??tirilerek farkl?? samplelar elde edilebilir)

	stratified = StratifiedKFoldCrossValidation(a, 30, 4)

ard??ndan yukar??da belirtilen getTrainFold ve getTestFold metodlar?? ile s??ras??yla i. e??itim
ve test k??meleri elde edilebilir. 
