<?php


namespace App\Tests\Entity;


use App\Entity\User;
use App\Tests\Entity\Traits\AssertTrait;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

class UserTest extends KernelTestCase
{
    use AssertTrait;

    private function getEntity(): User
    {
        return (new User())
            ->setEmail('username@email.com')
            ->setUsername('username')
            ->setPassword('$argon2id$v=19$m=65536,t=4,p=1$XL3p6V6uztMHtBpD0GPaeA$2nlIu6Gno/tREQ0aXrjmzE488+582YJdBQ/7okz7PqQ')
            ;
    }
}
