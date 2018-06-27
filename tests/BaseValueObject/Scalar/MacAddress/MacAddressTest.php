<?php

namespace BaseValueObject\Scalar\MacAddress;

use PHPUnit\Framework\TestCase;

/**
 * Class MacAddressTest
 * @package BaseValueObject\Scalar\MacAddress
 */
class MacAddressTest extends TestCase
{
    /**
     * @test
     * @expectedException \InvalidArgumentException
     */
    public function invalidMacException()
    {
        new MacAddress('invalid MAC');
    }

    /**
     * @test
     */
    public function validMac()
    {
        $mac = '10:10:10:10:10:10';
        $macAddress = new MacAddress($mac);
        $this->assertEquals($mac, $macAddress->value());
    }
}
