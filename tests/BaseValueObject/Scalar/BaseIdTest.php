<?php

namespace BaseValueObject\Scalar;

use PHPUnit\Framework\TestCase;
use Ramsey\Uuid\Uuid;
use Webmozart\Assert\Assert;

/**
 * Class BaseIdTest
 * @package BaseValueObject\Scalar
 */
class BaseIdTest extends TestCase
{
    /**
     * @test
     * @expectedException \InvalidArgumentException
     */
    public function invalidUuid()
    {
        new IdValueObject('invalidUuid');
    }

    /**
     * @test
     */
    public function validUuid()
    {
        $id = Uuid::uuid4()->toString();
        $idValueObject = new IdValueObject($id);

        $this->assertEquals($id, $idValueObject->value());
    }

    /**
     * @test
     */
    public function validUuidByNullValue()
    {
        $idValueObject = new IdValueObject();

        $this->assertEquals(
            1,
            preg_match(
                '/^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{12}$/',
                $idValueObject->value()
            )
        );
    }

    /**
     * @test
     */
    public function validToString()
    {
        $idString = '469c1f37-24f6-4d93-9a7c-01ed940a0760';
        $id = new IdValueObject($idString);
        $this->assertEquals($idString, $id->__toString());
    }
}
