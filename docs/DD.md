# Data dictionary

## Users (`user`)

|Field|Type|Specificities|Description|
|-|-|-|-|
|id|INT(11)|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|The identifier of the user|
|email|VARCHAR(180)|NOT NULL, UNIQUE|The email associated to the user|
|username|VARCHAR(60)|NOT NULL, UNIQUE|The username associated to the user|
|roles|JSON|NOT NULL|All roles assigned to the user|
|password|VARCHAR(255)|NOT NULL|The password hash used to login to the account|
|created_at|DATETIME|NOT NULL|The creation date of the user account|

## Posts (`post`)

|Field|Type|Specificities|Description|
|-|-|-|-|
|id|INT(11)|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|The identifier of the post|
|content|LONGTEXT|NOT NULL|The text message of the post|
|image|VARCHAR(255)|NULL|The image associated with the post message|
|owner_id|INT(11)|FOREIGN KEY, NOT NULL, UNSIGNED|User id attached to the post|
|created_at|DATETIME|NOT NULL|The creation date of the post|

## Comments (`comment`)

|Field|Type|Specificities|Description|
|-|-|-|-|
|id|INT(11)|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|The identifier of the comment|
|message|LONGTEXT|NOT NULL|The text message of the comment|
|owner_id|INT(11)|FOREIGN KEY, NOT NULL, UNSIGNED|User id attached to the comment|
|post_id|INT(11)|FOREIGN KEY, NOT NULL, UNSIGNED|Post id attached to the comment|
|created_at|DATETIME|NOT NULL|The creation date of the comment|
